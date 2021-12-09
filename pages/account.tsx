import React, { useState } from 'react'
import Button from '../components/Button'
import PencilIcon from '../components/Icons/PencilIcon'
import Input from '../components/Input'
import Modal from '../components/Modal'

/**
 * Renders the account settings page
 */
export default function Account() {
  const [isPasswordResetModalOpen, setIsPasswordResetModalOpen] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-10">Account Settings</h1>

      <div className="md:flex container justify-center mx-auto">
        <div className="flex flex-col justify-center items-center">
          <ChangeAvatar />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Organizations</h2>
            <ul>
              <li>Custodi</li>
              <li>Github Chat</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col ml-24 w-40">
          <div className="flex justify-between">
            <span className="h-5 mt-2 text-gray-500">Email</span>
            <Button kind="link" onClick={() => setIsEmailModalOpen(true)}>
              <div className="w-5 h-5">
                <PencilIcon />
              </div>
            </Button>
          </div>
          test@example.com
          <div className="flex justify-between mt-4">
            <span className="h-5 mt-2 text-gray-500">Password</span>
            <Button kind="link" onClick={() => setIsPasswordResetModalOpen(true)}>
              <div className="w-5 h-5">
                <PencilIcon />
              </div>
            </Button>
          </div>
          {/* Password reset modal */}
          <ChangeEmailModal isOpen={isEmailModalOpen} setIsOpen={setIsEmailModalOpen} />
          <ChangePasswordModal
            isOpen={isPasswordResetModalOpen}
            setIsOpen={setIsPasswordResetModalOpen}
          />
        </div>
      </div>
    </div>
  )
}

function ChangeAvatar() {
  return (
    <>
      <div className="w-28 h-28">
        <div className="bg-gray-300 w-full h-full rounded-full"></div>
      </div>
      <Button kind="link">Change Avatar</Button>
    </>
  )
}

const ChangeEmailModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<boolean>
}) => (
  <Modal
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    title="Change Email"
    primaryText="Change Email"
    onPrimaryClick={() => setIsOpen(false)}
    onCancelClick={() => setIsOpen(false)}
  >
    <Input id="Email" type="Email" label="Email" />
  </Modal>
)

const ChangePasswordModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<boolean>
}) => (
  <Modal
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    title="Change Password"
    primaryText="Change Password"
    onPrimaryClick={() => setIsOpen(false)}
    onCancelClick={() => setIsOpen(false)}
  >
    <Input id="currentPassword" type="password" label="Current Password" />
    <Input id="newPassword" type="password" label="New Password" />
    <Input id="confirmNewPassword" type="password" label="Confirm New Password" />
  </Modal>
)
