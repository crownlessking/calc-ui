
/**
 * Helps to insert classes in an element.
 *
 * Prevents the insertion of 'undefined' and 'null' in a string.
 * An empty string will be returned instead.
 *
 * @param field a value which can potentially be undefined or null.
 */
export function c(field: any): any {
  if (typeof field !== 'undefined'
    && field !== null
  ) {
    if (typeof field === 'string') {
      return ' '+field;
    }
    return field;
  }
  return '';
}

/**
 * If given a space-seperated list of CSS class names as a string, this method
 * will remove a class name from the list.
 *
 * @param className space-separated list of classes
 * @param classes   class name to be removed
 */
export function removeClass (className: string, classes: string[]): string {
  let result = className;
  for (const $class of classes) {
    const pattern = '\\b^'+$class+'\\b|\\s+\\b'+$class+'\\b';
    const regex = new RegExp(pattern, 'g');
    result = result.replace(regex, '');
  }
  return result;
}

/**
 * Appends a class name to a space-separated list of classes.
 *
 * @param className space-separated list of classes
 * @param classes   class name to be removed
 */
export function addClass (className: string, classes: string[]): string {
  let result = className;
  for (const $class of classes) {
    if (className.indexOf($class) < 0) {
      result += ' ' + $class;
    }
  }
  return result;
}

/**
 * Test if class name present in space-separated list of classes.
 *
 * @param classes   space-separated list of classes
 * @param className class name to search for.
 */
export function hasClass (classes:string, className:string) :boolean {
  return classes.indexOf(className) >= 0;
}
