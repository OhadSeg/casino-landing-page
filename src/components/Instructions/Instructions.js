import React from 'react';
import './Instructions.css';
import 'react-multi-carousel/lib/styles.css';
import InstructionItem from '../InstructionItem/InstructionItem';
import Carousel from 'react-multi-carousel';
import { instructionList, responsive } from './data';

function Instructions() {
  return (
    <Carousel responsive={responsive}>
      {instructionList.map((instruction, index) => (
        <div className="flex-row">
          <InstructionItem data={instruction} />
          {index !== instructionList.length - 1 && window.innerWidth > 1024 ? (
            <p>
              <i class="arrow right"></i>
            </p>
          ) : null}
        </div>
      ))}
    </Carousel>
  );
}

export default Instructions;
