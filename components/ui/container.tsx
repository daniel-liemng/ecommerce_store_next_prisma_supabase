interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className='max-w-7xl mx-auto'>{children}</div>;
};

export default Container;
