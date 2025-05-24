'use client'
import { useEffect } from 'react'

export default function C() {
    useEffect(() => {
        fetch('http://localhost:3000/Dashboard/loadDashboardData', { method: 'POST' })
    }, [])
}
