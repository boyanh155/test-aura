"use client";

import useModalStore from "@/stores/useModal";
import React from "react";

type Props = {};

const Modal = (props: Props) => {
  const { isModalOpen, closeModal, modalContent } = useModalStore();

  return isModalOpen ? (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {modalContent}
    </div>
  ) : null;
};

export default Modal;
