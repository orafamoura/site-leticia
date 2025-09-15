'use client';

import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<"button"> // dessa forma ele aceita todos os atributos nativos de um button

const Button = ({children, onClick, className}: ButtonProps) => {  
  return <button type="button" onClick={onClick} className={`text-button font-bold py-1 px-4 rounded-4xl focus:outline-none focus:shadow-outline shadow-xl/20 ${className}`}>{children}</button>
;
};

export default Button;