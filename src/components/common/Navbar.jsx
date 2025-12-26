import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./style/Navbar.style";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <S.MainLayout>
      <Logo />
      <S.NavLayout>
        <S.NavContainer className="scontainer">
          <S.NavBox className="menu">
            <S.NavItemTitle>신규모집 관리</S.NavItemTitle>

            <S.NavList>
              <S.NavItem>
                <S.NavStyleLink
                  to="/apply"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  모든 지원 서류 보기
                </S.NavStyleLink>
              </S.NavItem>

              <S.NavItem>
                <S.NavStyleLink
                  to="/pass"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  서류 합격자 보기
                </S.NavStyleLink>
              </S.NavItem>

              <S.NavItem>
                <S.NavStyleLink
                  to="/interview"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  지원자별 면접 시간 관리
                </S.NavStyleLink>
              </S.NavItem>

              <S.NavItem>
                <S.NavStyleLink
                  to="/pass-final"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  최종 합격자 보기
                </S.NavStyleLink>
              </S.NavItem>

              <S.NavItem>
                <S.NavStyleLink
                  to="/document"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  서류 문항 관리
                </S.NavStyleLink>
              </S.NavItem>

              <S.NavItem>
                <S.NavStyleLink
                  to="/init-applicant"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  지원자 정보 초기화
                </S.NavStyleLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavStyleLink
                  to="/stash"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  휴지통
                </S.NavStyleLink>
              </S.NavItem>
            </S.NavList>
          </S.NavBox>
        </S.NavContainer>
      </S.NavLayout>

      <Outlet />
    </S.MainLayout>
  );
};

export default Navbar;
