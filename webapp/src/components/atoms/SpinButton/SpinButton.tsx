import './SpinButton.css';

const SpinButton: React.FC<{ name: string | undefined }> = ({ name }) => {
  return (
    <div className="spin-button__box">
      <div className="spin-button btn">
        <span className="spin-button__content">Name:{name}</span>
      </div>
    </div>
  );
};

export default SpinButton;
