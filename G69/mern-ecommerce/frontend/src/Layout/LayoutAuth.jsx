import { Outlet } from "react-router-dom"

const LayoutAuth = () => {
    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <Outlet />
            </div>
        </div>
    )
}
export default LayoutAuth