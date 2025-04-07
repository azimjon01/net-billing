import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  Actions,
  Exit,
  FileName,
  HiddenInput,
  InputLabel,
  RegisterContainer,
  RegisterModal,
  RegisterTitle,
  Send,
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

        <InputLabel>
          Faylni tanlang +
          <HiddenInput type="file" onChange={handleFileChange} />
          {file && <FileName>Tanlangan fayl: {file.name}</FileName>}
        </InputLabel>

        <Actions>
          <Send type="submit">Yuborish</Send>
        </Actions>
        <Exit type="button" onClick={onClose}>
          X
        </Exit>
      </RegisterModal>
    </RegisterContainer>
  );
};

export default RegisterDocument;
