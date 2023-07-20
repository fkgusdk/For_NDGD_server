import React from "react";
import { PageTitleStyled } from "../styles/ComponentsStyled";

export default function Header({title, txt}) {
    return (
      <PageTitleStyled>
        <h2 className="pt-title">
            {title}
        </h2>
        <div className="pt-txt">
            {txt}
        </div>
      </PageTitleStyled>
    );
}