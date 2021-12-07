import { useSignIn } from 'react-supabase'
import { DiscordIcon, GitHubIcon, GitLabIcon, GoogleIcon, TwitterIcon } from './LoginIcons'

const providers = ['google', 'github', 'discord', 'gitlab', 'twitter'] as const

type Provider = typeof providers[number]

const OauthProviders = () => {
  const [{}, signIn] = useSignIn()

  const handleProviderClick = (provider: Provider) => {
    signIn({ provider }, {})
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
      className={`filter drop-shadow-3xl rounded-lg p-2.5 bg-${backgroundColor}`}
      onClick={() => onClick(provider)}
    >
      {renderIcon()}
    </button>
  )
}

const backgroundColorByProvider: { [k in Provider]: string } = {
  google: 'white',
  discord: 'discord',
  github: 'black',
  gitlab: 'white',
  twitter: 'twitter',
}

export default OauthProviders
