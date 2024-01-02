import React, { PropsWithChildren } from 'react'

const Badge = ({ children }:PropsWithChildren) => (<div className="border rounded-lg w-fit py-2 px-4 border-base-300 bg-base-200">{children}</div>)

export default Badge