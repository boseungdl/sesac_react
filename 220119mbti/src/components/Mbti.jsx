import React from 'react';
import styled from 'styled-components';
import SkyblueButton from './SkyblueButton';
import { useSelector, useDispatch } from 'react-redux';
import { next, check } from '../store/modules/mbti';

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();
  const SurveyQuestion = styled.p`
    font-size: 1.5em;
    color: #777;
  `;
  const Vs = styled.p`
    font-size: 2em;
    padding-top: 1em;
  `;

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, i) => {
          return (
            <li key={i}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
              {i === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
