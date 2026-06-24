export default function DiagonalArrow({ className = "", isV1 = false }) {
    const arrowClass = isV1
      ? `absolute top-3 right-3 text-gray-300 transform transition-transform group-hover:text-pink-300 group-focus:text-pink-300 group-hover:translate-x-1 group-focus:translate-x-1 group-hover:translate-y-[-1px] group-focus:translate-y-[-1px]`
      : `absolute top-3 right-3 text-gray-500 transform transition-transform group-hover:text-light-accent dark:text-dark-accent group-focus:text-light-accent dark:text-dark-accent group-hover:translate-x-1 group-focus:translate-x-1 group-hover:translate-y-[-1px] group-focus:translate-y-[-1px]`;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className={`${arrowClass} ${className}`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
      </svg>
    );
  }
  