import styled from 'styled-components';
import { black, grWhite, white } from '../../style/color';

export const HeaderStyle = styled.header`
  width: 100%;
  height: 90px;
`;

export const TopBarStyle = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  background-color: ${black};
  color: ${white};
`;

export const TopBarContainerStyle = styled.div`
  max-width: 1110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const LeftElementsContainerStyle = styled.div`
  max-width: 483px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ElementWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

export const SvgWrapperStyle = styled.div`
  width: 14px;
  height: 14px;
  fill: ${white};
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const AddressTextStyle = styled.p`
  font-family: Inter,serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.03em;
  text-align: left;
`;

export const RightElementsContainerStyle = styled.div`
  max-width: 83px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomBarContainerStyle = styled.div`
  width: 100%;
  height: 66px;
  border-bottom: 1px solid ${grWhite};
`;

export const BottomInnerContainerStyle = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoStyle = styled.h1`
  font-family: Playfair Display SC,serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
`;

export const NavContainerStyle = styled.nav`
  max-width: 585px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
`;

export const LinkStyle = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const ActionMenuContainerStyle = styled.div`
  width: 172px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionElementStyle = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const CircleStyle = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${black};
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
  color: ${white};
`;