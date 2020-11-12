import styled from 'styled-components';

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;

  #page-teacher-form .page-header .header-content {
    margin-bottom: 6.4rem;
  }

  main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      & + fieldset {
        margin-top: 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
      }
    }
  }
`;
