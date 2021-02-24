namespace BusinessLayer.Models.Output
{
    public class SendKudosModel
    {
        public int SenderId { get; set; }
        public int RecieverId { get; set; }
        public int Amount { get; set; }
    }
}
