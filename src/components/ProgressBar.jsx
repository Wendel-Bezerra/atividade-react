// Recebe o valor (0-100) via props e usa como largura da barra
export default function ProgressBar({ value }) {
  return (
    <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-fill" style={{ width: `${value}%` }}>
        {value}%
      </div>
    </div>
  );
}
