declare module "@custodi/types" {

    export type User = {
        id: string;
        account_id: string; // The auth.users id
        first_name: string;
        last_name?: string;
        email: string;
        avatar_hash: string;
        created_at: string
    }

}