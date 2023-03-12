export interface ProgramItem {
  heading: string;
  description: string;
}

export interface CourseInfoFormValues {
  course_name: string;
  tag: string;
  cover_url: string;
  description: string;
  start_date?: Date;
  end_date?: Date;
  course_program: Array<ProgramItem>;
}
