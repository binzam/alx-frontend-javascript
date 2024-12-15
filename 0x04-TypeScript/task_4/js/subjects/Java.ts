import { Subjects } from './Subject';

declare module './Teacher' {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
}

export namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingJava &&
        this.teacher.experienceTeachingJava > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
