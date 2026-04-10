import { Modal } from "@heroui/react";

const ModalCustom = ({
  isOpen,
  setIsOpen,
  title,
  icon = null,
  children,
  footer = null,
  size = "md",
  closeTrigger = true,
  className,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "cover" | "full" | "xs";
  closeTrigger?: boolean;
  className?: string;
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Modal.Backdrop>
        <Modal.Container size={size}>
          <Modal.Dialog className={` dark:bg-gray-800 ${className}`}>
            {closeTrigger && <Modal.CloseTrigger />}
            <Modal.Header className="flex flex-row items-center">
              {icon && (
                <Modal.Icon className="bg-default text-foreground">
                  {icon}
                </Modal.Icon>
              )}
              <Modal.Heading>{title}</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div>{children}</div>
            </Modal.Body>
            {footer && <Modal.Footer>{footer}</Modal.Footer>}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ModalCustom;
