const TextContent = ({ textContent }: { textContent: string }) => {
  return (
    <div className="h-full overflow-y-auto rounded-lg bg-white p-5">
      <div className="mb-4 flex-grow">
          <div className="mb-5">{textContent}</div>
      </div>
    </div>
  );
};

export default TextContent;
