import { useSignIn } from 'react-supabase'
import { DiscordIcon, GitHubIcon, GitLabIcon, GoogleIcon, TwitterIcon } from './LoginIcons'

const providers = ['google', 'github', 'discord', 'gitlab', 'twitter'] as const

type Provider = typeof providers[number]

const OauthProviders = () => {
  const [{}, signIn] = useSignIn()

  const handleProviderClick = (provider: Provider) => {
    signIn({ provider }, { redirectTo: '/' })
  }

  return (
    <div className="flex space-x-6 w-max mx-auto mt-6">
      {providers.map((provider) => (
        <ProviderButton provider={provider} key={provider} onClick={handleProviderClick} />
      ))}
    </div>
  )
}

interface ProviderButtonProps {
  provider: Provider
  onClick: (provider: Provider) => void
}

const ProviderButton = ({ provider, onClick }: ProviderButtonProps) => {
  const renderIcon = () => {
    switch (provider) {
      case 'google':
        return <GoogleIcon />
      case 'github':
        return <GitHubIcon />
      case 'gitlab':
        return <GitLabIcon />
      case 'twitter':
        return <TwitterIcon />
      case 'discord':
        return <DiscordIcon />
    }
  }

  const backgroundColor = backgroundColorByProvider[provider]

  return (
    <button
      className={`filter drop-shadow-3xl rounded-lg p-2.5 ${backgroundColor} transition duration-300 ease-in-out hover:opacity-80`}
      onClick={() => onClick(provider)}
    >
      {renderIcon()}
    </button>
  )
}

const backgroundColorByProvider: { [k in Provider]: string } = {
  google: 'bg-white',
  discord: 'bg-discord',
  github: 'bg-black',
  gitlab: 'bg-white',
  twitter: 'bg-twitter',
}

export default OauthProviders
