export class InvalidUserError extends Error {
   constructor(public message: string) {
      super(message);
   }

   toString() {
      return { message: this.message };
   }
}
