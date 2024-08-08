import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';

interface TextWriterProps {
  content: string;
}

const TextWriter: React.FC<TextWriterProps> = ({ content }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    content.slice(0, latest)
  );

  useEffect(() => {
    count.set(0);
    const controls = animate(count, content.length, {
      type: "tween", 
      duration: 2,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [content]); 

  return (
    <motion.div>
      {displayText}
    </motion.div>
  )
}

export default TextWriter;
