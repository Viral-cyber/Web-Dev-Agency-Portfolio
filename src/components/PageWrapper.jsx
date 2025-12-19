

export default function PageWrapper({ children }) {
  return (
    <div style={{ overflow: "visible" }}>
      {children}
    </div>
  )
}
