-- UTILS
CREATE SCHEMA IF NOT EXISTS utils;
CREATE SEQUENCE IF NOT EXISTS utils.snowflake_id_seq;
ALTER SEQUENCE utils.snowflake_id_seq OWNER TO postgres;

CREATE OR REPLACE FUNCTION utils.snowflake_generator()
    RETURNS bigint
    LANGUAGE 'plpgsql'
AS
$BODY$
DECLARE
    our_epoch  bigint := 1638576000000;
    seq_id     bigint;
    now_millis bigint;
    -- the id of this DB shard, must be set for each
    -- schema shard you have - you could pass this as a parameter too
    shard_id   int    := 1;
    result     bigint := 0;
BEGIN
    SELECT nextval('utils.snowflake_id_seq') % 1024 INTO seq_id;

    SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
    result := (now_millis - our_epoch) << 23;
    result := result | (shard_id << 10);
    result := result | (seq_id);
    return result;
END;
$BODY$;

ALTER FUNCTION utils.snowflake_generator() OWNER TO postgres;

-- ENUMS
CREATE TYPE public.member_type as ENUM ('ADMIN', 'DEVELOPER', 'VIEWER');
CREATE TYPE public.transaction_type as ENUM ('INFO', 'WARN', 'EXCEPTION');

-- TABLES
CREATE TABLE IF NOT EXISTS public.users
(
    id          bigint      not null primary key default utils.snowflake_generator(),
    account_id  uuid        not null,
    first_name  varchar(30) not null,
    last_name   varchar(30) null,
    email       text        not null,
    avatar_hash text        null,
    created_at  timestamptz not null             default now()
);

CREATE TABLE IF NOT EXISTS public.organizations
(
    id         bigint      not null primary key default utils.snowflake_generator(),
    name       varchar(25) not null,
    timezone   text        not null             default 'europe/london',
    owner_id   bigint      not null,
    created_at timestamptz not null             default now()
);

CREATE TABLE IF NOT EXISTS public.members
(
    id              bigint             not null primary key default utils.snowflake_generator(),
    organization_id bigint             not null,
    user_id         bigint             not null,
    role            public.member_type not null             default 'DEVELOPER',
    joined_at       timestamptz        not null             default now()
);

CREATE TABLE IF NOT EXISTS public.project_types
(
    id        bigint      not null primary key default utils.snowflake_generator(),
    sort_name varchar(5)  not null,
    long_name varchar(50) not null,
    icon_hash text        not null
);

CREATE TABLE IF NOT EXISTS public.projects
(
    id                   bigint      not null primary key default utils.snowflake_generator(),
    name                 varchar(25) not null,
    type                 bigint      not null, -- Foreign Key to Project Types
    api_key_hash         text        not null,
    api_key_generated_at timestamptz not null             default now(),
    created_at           timestamptz not null             default now()
);

CREATE TABLE IF NOT EXISTS public.transactions
(
    id          bigint                  not null primary key default utils.snowflake_generator(),
    project_id  bigint                  not null,
    client      jsonb                   not null             default '{
      "type": "unknown"
    }'::jsonb,
    meta        jsonb                   not null             default '{}'::jsonb,
    type        public.transaction_type not null,
    custom_id   varchar(255)            null,
    custom_type varchar(255)            null,
    assigned_to bigint                  null,
    received_at timestamptz             not null             default now(),
    fixed_at    timestamptz             null
);

-- Views
CREATE OR REPLACE VIEW public.public_users AS
SELECT id,
       account_id,
       first_name,
       avatar_hash
FROM public.users;

-- Foreign Keys
ALTER TABLE public.users
    ADD CONSTRAINT fk_users_auth_accounts
        FOREIGN KEY (account_id)
            REFERENCES auth.users (id);

ALTER TABLE public.members
    ADD CONSTRAINT fk_members_user_id
        FOREIGN KEY (user_id)
            REFERENCES public.public_users (id);

ALTER TABLE public.members
    ADD CONSTRAINT fk_members_organization_id
        FOREIGN KEY (organization_id)
            REFERENCES public.organizations (id);

ALTER TABLE public.projects
    ADD CONSTRAINT fk_projects_project_type
        FOREIGN KEY (type)
            REFERENCES public.project_types (id);

ALTER TABLE public.transactions
    ADD CONSTRAINT fk_transactions_project_id
        FOREIGN KEY (project_id)
            REFERENCES public.projects (id);

ALTER TABLE public.transactions
    ADD CONSTRAINT fk_transactions_assigned_to
        FOREIGN KEY (assigned_to)
            REFERENCES public.public_users (id);
