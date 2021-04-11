import React from 'react'
import withAuth from '../hoc/withAuth'

function dashboard() {
  return <div>Dashboard</div>
}

export default withAuth(dashboard, "/login")