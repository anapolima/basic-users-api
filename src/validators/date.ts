class DateValidator
{
    public date: string;
    public errors: string;

    public constructor (date: string)
    {
        this.errors = "";
        this.date = this.validate(date);
    }

    private validate (date: string): string
    {
        if (!date)
        {
            this.errors += "birthdate:birthdate required";

            return "";
        }

        if (!new Date(date).getTime())
        {
            this.errors += "birthdate:invalid date|";

            return "";
        }

        return date.trim();
    }
}

export { DateValidator };
