import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import { useToast } from '../context/ToastContext';

export default function Upload() {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const { showToast } = useToast();

  // Enquanto "uploading" for true, soma 10% a cada 300ms
  useEffect(() => {
    if (!uploading) return;
    if (progress === 100) {
      setUploading(false);
      showToast('Upload concluído!', 'success');
      return;
    }
    const timer = setTimeout(() => setProgress(progress + 10), 300);
    return () => clearTimeout(timer);
  }, [uploading, progress, showToast]);

  function startUpload() {
    setProgress(0);
    setUploading(true);
  }

  return (
    <section>
      <h1>Upload de arquivo</h1>
      <ProgressBar value={progress} />
      <button onClick={startUpload} disabled={uploading}>
        {uploading ? 'Enviando...' : 'Iniciar upload'}
      </button>
    </section>
  );
}
