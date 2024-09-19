const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex items-center justify-center h-full py-10 mt-15">
            {children}
        </div>
    )
}

export default AuthLayout