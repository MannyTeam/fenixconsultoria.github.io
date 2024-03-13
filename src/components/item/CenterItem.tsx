import { CenterItemStyled } from "./centerItem.styles"

type CenterItemProps = {
  children: React.ReactNode;
}
export const CenterItem = ({ children }: CenterItemProps) => {
  return (
    <CenterItemStyled>
      {children}
    </CenterItemStyled>
  )
};