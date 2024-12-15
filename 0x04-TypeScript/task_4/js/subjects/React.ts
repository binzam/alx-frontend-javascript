import { Subjects } from './Subject';

declare module './Teacher' {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
}

export namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact &&
        this.teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
