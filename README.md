## Iteration 6: Analyze login approaches

### 1. Compare this version of the loginUser controller to the one used in Iterations 1–5 (in the backend folder).

```
for backend v2 loginUser controller: it used validator, bcrypt, and jwt in the controller file by compare with the 1st backend user controller.js.
which means, v2 version backend for user login or signup is more secure compare with the precvious version of the backend.
```

### 2. Specifically, analyze the following:

- What is the purpose of userSchema.statics.login in userModel.js?

```
the purpose of userSchema.statics.login in userModel.js is to create a static method for the user model to handle user login logic. it means the login value is a static value with no jwt security. it will easy to attack the user login information.
```

- Compare User.findOne({ email }) to this.findOne({ email }). When and why do we use this instead of the model's name?

```
for 1st backend email is a parameter for function, when it is a parameter for the function we can use this.**
and for backend v2 email is a property of the object, we use this instead of the model's name because it is more secure and easy to use.
```

- Why is bcrypt imported in userController.js and not in userModel.js in this version?

```
for backend v2, bcrypt is imported in userController.js because it is more secure and easy to use. it is a static method for the user model to handle user login logic.
```

### 3. Discuss which approach you plan to use for your project and explain why.

```
the 2nd version of the backend  we will use in the future, because it is more secure and easy to use.
```
