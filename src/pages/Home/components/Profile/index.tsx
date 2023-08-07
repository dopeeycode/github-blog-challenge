import ExternalLink from '../../../../components/ExternalLink'
import { InfoProfile, ProfileContainer, ProfilePicture } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/dopeeycode.png" />

      <InfoProfile>
        <header>
          <h1>Dopeey Dev</h1>

          <ExternalLink
            text="Github"
            target="_blank"
            href="https://github.com/dopeeycode"
          />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            dopeeycode
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Nenhuma
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            12 seguidores
          </li>
        </ul>
      </InfoProfile>
    </ProfileContainer>
  )
}
