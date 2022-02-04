/**
 * 
 * @param environment An object containing your env vars (eg. process.env).
 * @returns true when guard exist in env false if not.
 */

const __checkenv = (environment: any): boolean => {
    if (environment['guardApiUrl'] != null && environment['guardApiUrl'] != '')
        return false;
    
    return true;
}

export { __checkenv }