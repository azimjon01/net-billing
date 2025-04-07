import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  Actions,
  FileName,
  RegisterContainer,
  RegisterModal,
  RegisterTitle,
} from "./RegisterDocument.styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const RegisterDocument: FC<Props> = ({ open, onClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Iltimos, faylni tanlang!");
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    alert(`✅ "${file.name}" muvaffaqiyatli yuklandi!`);
    setFile(null);
    onClose();
  };

  if (!open) return null;

  return (
    <RegisterContainer>
      <RegisterModal onSubmit={handleSubmit}>
        <RegisterTitle>📎Hujjatni Ro'yxatdan o'tkazish</RegisterTitle>

        <input type="file" onChange={handleFileChange} />
        {file && <FileName>Tanlangan fayl: {file.name}</FileName>}

        <Actions>
          <button type="button" onClick={onClose}>
            Yopish
          </button>
          <button type="submit">Yuborish</button>
        </Actions>
      </RegisterModal>
    </RegisterContainer>
  );
};

export default RegisterDocument;
