/* eslint-disable react/no-unescaped-entities */

import ProjectAction from './project/ProjectAction';
import ProjectGrid from './project/ProjectGrid';
import ProjectIntro from './project/ProjectIntro';

export default function ProjectPage(){

   
    return(
        <>
            <div className="text-[#255036]">
      {/* Section 1: Projects Introduction */}
     <ProjectIntro />

      {/* Section 2: Project Grid */}
    <ProjectGrid />

      {/* Section 3: Call to Action */}
      <ProjectAction />
    </div>

        </>
    )
}