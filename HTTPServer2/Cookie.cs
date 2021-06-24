using System.Text;

namespace HTTPServer2
{
    public class Cookie
    {
        public Cookie(string name, string value)
        {
            this.Name = name;
            this.Value = value;
            this.Path = "/";
        }

        public string Name { get; set; }
        public string Value { get; set; }
        public int MaxAge { get; set; }
        public bool HttpOnly { get; set; }
        public string Path { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append($"{this.Name}={this.Value}; Path={this.Path};");
            if (MaxAge != 0)
            {
                sb.Append($" Max-Age={this.MaxAge};");
            }

            if (this.HttpOnly)
            {
                sb.Append(" HttpOnly;");
            }

            return sb.ToString();
        }
    }
}
