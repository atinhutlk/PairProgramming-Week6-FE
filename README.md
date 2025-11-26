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


## Iteration 7: Analyze signup approaches


### 1. Compare this version of the signupUser controller to the one used in Iterations 1–5 (in the backend folder).

```
In Iterations 1–5, `signupUser` is very thin: it only reads `email` and `password` from the request and calls `User.signup(email, password)`.  
In the new version, `signupUser` does all the work itself (validates email/password, checks if the email exists, hashes the password, and calls `User.create`).
```
### 2. Specifically, analyze the following:

- What is the purpose of userSchema.statics.signup in userModel.js?

```
It’s a static method that puts all signup logic (validation, checking existing user, hashing password, creating the user) inside the model, so the controller can just call User.signup(email, password) and stay simple.

```

- Compare User.create({ email, password: hash }) to this.create({ email, password: hash }). When and why do we use this instead of the model's name?

```
User.create(...) is used outside the model (e.g. in controllers) where you have the User variable.

this.create(...) is used inside a static method on the schema; there this refers to the model itself. We use this so the code doesn’t depend on the variable name User.

```
- Why is validator imported in userController.js and not in userModel.js in this version?

```
Because in this version, all validation (isEmail, isStrongPassword) is done directly in signupUser in the controller, not in a static method in the model. So the controller needs validator, not the model.

```
### 3. Discuss which approach you plan to use for your project and explain why.

```
I plan to use the model-based static method because it centralizes the all signup rules in one place -> controller will be smaller and cleaner.
```