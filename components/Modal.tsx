import { Dialog } from '@headlessui/react'
import { ReactNode } from 'react'
import Button from './Button'

interface ModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<boolean>
  title: string
  description?: string
  children?: ReactNode
  primaryText: string
  onPrimaryClick: () => void
  cancelText?: string
  onCancelClick?: () => void
}

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  description,
  primaryText,
  onCancelClick,
  onPrimaryClick,
  cancelText,
  children,
}: ModalProps) {
  return (
    <Dialog
      className="fixed z-10 inset-0 overflow-y-auto"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left ">
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  {title}
                </Dialog.Title>
                {description && (
                  <Dialog.Description className="mt-2 text-sm text-gray-500">
                    {description}
                  </Dialog.Description>
                )}
                <div className="pt-4">{children}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-8 sm:flex sm:flex-row-reverse">
            <Button onClick={onPrimaryClick}>{primaryText}</Button>
            {onCancelClick && (
              <Button kind="outline" className="mr-4" onClick={onCancelClick}>
                {cancelText || 'Cancel'}
              </Button>
            )}
          </div>{' '}
        </div>{' '}
      </div>
    </Dialog>
  )
}
