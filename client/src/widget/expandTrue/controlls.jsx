import "../../css/expandTrue/controlls.css";

const Controlls = ({ handleExpand, handleRemove, color }) => {
  return (
    <div className="controlls">
      <svg
        className="img-collapse"
        onClick={handleExpand}
        width="18"
        height="2"
        viewBox="0 0 18 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="18" height="1.5" rx="0.75" fill={color} />
      </svg>

      <svg
        className="img-close"
        onClick={handleRemove}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1723 10.0057L19.7455 1.43251C20.0764 1.11295 20.0856 0.585673 19.766 0.254784C19.4464 -0.0761041 18.9192 -0.0852791 18.5883 0.234287C18.5814 0.240973 18.5745 0.247805 18.5678 0.254784L9.99455 8.82796L1.42137 0.254735C1.09048 -0.0648304 0.563206 -0.0556554 0.24364 0.275233C-0.0681178 0.59802 -0.0681178 1.10973 0.24364 1.43251L8.81682 10.0057L0.24364 18.5789C-0.0815388 18.9041 -0.0815388 19.4314 0.24364 19.7566C0.568867 20.0817 1.09614 20.0817 1.42137 19.7566L9.99455 11.1834L18.5677 19.7566C18.8986 20.0762 19.4259 20.067 19.7455 19.7361C20.0572 19.4133 20.0572 18.9016 19.7455 18.5789L11.1723 10.0057Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Controlls;
