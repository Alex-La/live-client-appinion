const Loader = ({ color }) => {
  return (
    <svg
      width="227px"
      height="227px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="19.5" y="43.5" width="11" height="13" fill={color}>
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="0.9900990099009901s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="38.3;43.5;43.5"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.19801980198019803s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="0.9900990099009901s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="23.400000000000002;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.19801980198019803s"
        ></animate>
      </rect>
      <rect x="44.5" y="43.5" width="11" height="13" fill={color}>
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="0.9900990099009901s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="39.6;43.5;43.5"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.09900990099009901s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="0.9900990099009901s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.8;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.09900990099009901s"
        ></animate>
      </rect>
      <rect x="69.5" y="43.5" width="11" height="13" fill={color}>
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="0.9900990099009901s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="39.6;43.5;43.5"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="0.9900990099009901s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.8;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
      </rect>
    </svg>
  );
};

export default Loader;
