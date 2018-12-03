export interface RenameOptions {
    /**
     * if true, does not delete the old key name, keeping both the new and old keys in place. Defaults to false.
     */
    alias?: boolean;
    /**
     * if true, allows renaming multiple keys to the same destination where the last rename wins. Defaults to false.
     */
    multiple?: boolean;
    /**
     * if true, allows renaming a key over an existing key. Defaults to false.
     */
    override?: boolean;
    /**
     * if true, skip renaming of a key if it's undefined. Defaults to false.
     */
    ignoreUndefined?: boolean;
}
