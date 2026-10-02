// Extends the String prototype with an ordinalize method 
// augmentation for the String interface to include the ordinalize method
declare interface String {
    /**
     * Converts the string into its ordinal form (e.g., "1" -> "1st", "2" -> "2nd").
     * @param this The string to be ordinalized.
     * @returns The ordinalized string representation of the input string.
     */
    ordinalize(this: string): string;
}