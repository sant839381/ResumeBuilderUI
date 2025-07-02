export interface IEducation { 

      degree :String;
	  university:String;
	  score:String;
	  edyear:String;
}

export interface IEducationPayload {
  users: IEducation[];
}
