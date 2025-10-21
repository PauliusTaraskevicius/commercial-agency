const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#7e958d]">
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
