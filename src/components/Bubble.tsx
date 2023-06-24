type BubbleProps = {
  text: string;
}

const Bubble: React.FC<BubbleProps> = ({ text }) => {
  return (
    <div className="bubble">
      {text}
    </div>
  );
};

export default Bubble;
