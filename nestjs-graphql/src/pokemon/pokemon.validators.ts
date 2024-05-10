import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

/**
 * Validates that the property is the only query argument
 * @param validationOptions 
 * @returns true if property is the only argument
 */
export function IsOnlyQueryArg(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isOnlyQueryArg',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return Object.values(args.object).length === 1;
        },
      },
    });
  };
}