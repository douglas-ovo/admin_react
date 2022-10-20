import React, { ReactElement } from 'react'
import { Navigate } from "react-router-dom";
type Props = { children: ReactElement }

export default function AuthRoute({ children }: Props) {
    const token = localStorage.getItem('userinfo')
    if (token) {
        return (
            <>{children}</>
        )
    }

    return <Navigate to='/login' replace />
}
