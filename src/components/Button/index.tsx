'use client';

import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<"button"> // dessa forma ele aceita todos os atributos nativos de um button

const Button = ({children, onClick, className}: ButtonProps) => {  
  return <button type="button" onClick={onClick} className={`font-bold py-1 pt-1.5 px-8 rounded-4xl focus:outline-none focus:shadow-outline shadow-md/20 ${className}`}>{children}</button>
;
};

export default Button;